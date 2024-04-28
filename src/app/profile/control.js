export const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const password = e.target[1].value;
    return [id, password];
}