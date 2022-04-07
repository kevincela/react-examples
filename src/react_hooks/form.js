import React from "react";
import { useForm } from "./hooks/useForm";

export default function Form() {
    const [name, onChangeName] = useForm();
    const [surname, onChangeSurname] = useForm();

    return <div>
        <input type="text" placeholder="Name" value={name} onChange={onChangeName} />
        <input type="text" placeholder="Surname" value={surname} onChange={onChangeSurname} />
        <div>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Surname:</strong> {surname}</p>
        </div>
    </div>
}