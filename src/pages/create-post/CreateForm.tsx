import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { title } from "process"
import { useAuthState } from "react-firebase-hooks/auth"

interface CreateFormData {
    title: string,
    description: string
}

export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title: yup.string().required("You Must Add a Title"),
        description: yup.string().required("You must add a Description")

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const postRef = collection(db, "posts");
    const onCreatePost = async (data: CreateFormData) => {
        console.log(data)
        await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <label htmlFor="title">TItle:</label>
            <input className="form-control" id="title" placeholder="Title..." {...register("title")} />
            <p style={{ color: "red" }}>{errors.title?.message}</p>
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" placeholder="Description..." {...register("description")} />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
            <input type="submit" className="btn btn-outline-success" />
        </form>
    )
}