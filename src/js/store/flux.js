const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            contactEdit: null,
        },

        actions: {
            setContactEdit: (contact) => {
                setStore({ contactEdit: contact });
            },
            clearContactEdit: () => {
                setStore({ contactEdit: null });
            },

            crearAgenda: async () => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/carlosMolina`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify([])
                    });
                    if (res.ok) {
                        getActions().cargarContactos();
                    } else {
                        console.error("Error al crear la agenda");
                    }
                } catch (error) {
                    console.error("Error al crear la agenda:", error);
                }
            },

            cargarContactos: async () => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/carlosMolina`);
                    if (!res.ok) {
                        throw new Error("Agenda no encontrada");
                    }
                    const data = await res.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error al cargar la lista de contactos:", error);
                    getActions().crearAgenda(); 
                }
            },

            crearContacto: async (nuevoContacto) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/carlosMolina/contacts`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(nuevoContacto)
                    });
                    if (res.ok) {
                        getActions().cargarContactos(); 
                    } else {
                        console.error("Error al crear el contacto");
                    }
                } catch (error) {
                    console.error("Error al crear el contacto:", error);
                }
            },

            editarContacto: async (id, contactoEditado) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/carlosMolina/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contactoEditado)
                    });
                    if (res.ok) {
                        getActions().cargarContactos(); 
                    } else {
                        console.error("Error al editar el contacto");
                    }
                } catch (error) {
                    console.error("Error al editar el contacto:", error);
                }
            },

            eliminarContacto: async (id) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/carlosMolina/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (res.ok) {
                        getActions().cargarContactos(); // 
                    } else {
                        console.error("Error al eliminar el contacto");
                    }
                } catch (error) {
                    console.error("Error al eliminar el contacto:", error);
                }
            }
        }
    };
};

export default getState;
