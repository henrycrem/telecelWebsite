import axios from "axios";



const apiKey="76e3f3c315a5a9113869f1fea39027cf351663b771e6d17c268b87c378d0f67021d4ff98e50488faa1539b41d9d5f53249a3817253495431b8597312f7d4b1b3d3bd2a4a0dad74b684485782836225320504e819ed30b44771ec4a9fd5fe5ddd00bd9bbee138f14eae505129c2b614dd455d650467bdd2f0754bdd519e8fef6a"

const params = {
    headers: {
        'Authorization': `Bearer ${apiKey}`, // Include your API key in the Authorization header
        'Content-Type': 'application/json',
    }
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get("http://localhost:1337" + url, params);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to handle it at the caller level
    }
};



export const postData = async (url, formData ) => {
    const { res } = await axios.post("http://localhost:1337" +url,formData , params)
    return res;
}

export const deleteData = async (url, id ) => {
    const { res } = await axios.delete(`http://localhost:1337${url}${id}`, params)
    return res;
}