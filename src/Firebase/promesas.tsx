import { addDoc, collection, getDocs,getDoc, query, where,doc,updateDoc,deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Persona } from "@/Interfaces/IPersona";
import { Persona1 } from "@/Interfaces/IPersona";

export const registrarPersona = async (persona: Persona) => {
    const q = query(
        collection(db, "personas"),
        where("correo", "==", persona.correo)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return Promise.reject(new Error("El correo electrónico ya está registrado."));
    }

    await addDoc(collection(db, "personas"), persona);
};

export const login = async (correo: string, contraseña: string) => {
    const q = query(
        collection(db, "personas"),
        where("correo", "==", correo),
        where("contraseña", "==", contraseña)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return Promise.reject(new Error("Correo o contraseña incorrectos."));
    }

    return { success: true };
};

export const registrarPersona1 = async (persona: Persona1) => {
    const q = query(
        collection(db, "personas1"),
        where("correo", "==", persona.correo)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return Promise.reject(new Error("El correo electrónico ya está registrado en la colección personas1."));
    }

    await addDoc(collection(db, "personas1"), persona);
};


  export const obtenerPersonas = async (): Promise<Persona1[]> => {
    let personas: Persona1[] = [];
    const querySnapshot = await getDocs(collection(db, "personas1"));

    querySnapshot.forEach((doc) => {
        const persona: Persona1 = {
            rut: doc.data().rut,
            apellido: doc.data().apellido,
            correo: doc.data().correo,
            edad: doc.data().edad,
            direccion: doc.data().direccion, 
            nombre: doc.data().nombre,
            genero: doc.data().genero,
            checkbox: doc.data().checkbox,
            key:doc.id
        };

        personas.push(persona); 
    });

    return personas;
}
export const obtenerPersona = async (key: string) => {
    const docRef = doc(db, "personas1", key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let persona: Persona1 = {
            rut: docSnap.data().rut,
            apellido: docSnap.data().apellido,
            correo: docSnap.data().correo,
            edad: docSnap.data().edad,
            direccion: docSnap.data().direccion, 
            nombre: docSnap.data().nombre,
            genero: docSnap.data().genero,
            checkbox: docSnap.data().checkbox,
            key: docSnap.id
        };
        return persona;
    } else {
        return undefined;
    }
};

export const actualizarPersona = async (p: Persona1) => {
    const ref = doc(db, "personas1", p.key!);
    await updateDoc(ref, { ...p });
};

export const eliminarPersona = async (p: Persona1) => {
    try {

        if (!p.key) {
            throw new Error("La clave de la persona es inválida o está ausente.");
        }

        const ref = doc(db, "personas1", p.key);
        await deleteDoc(ref);
        console.log("listo");
    } catch (error) {
        console.log("error", error);
    }
}
