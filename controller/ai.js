import fetch from "node-fetch";



const AI_KEY = process.env.AI_API_KEY


export const aiCs = async (req,res) => {
    try {
        const {message} = req.body
        const response= await fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${AI_KEY}`
            },
            body: JSON.stringify({
                model: "glm-4.5",
                messages : [
                    {
                        role: "system", content: "Kamu adalah AI Asistant yang dikembangkan oleh Kelompok 1 PBL BATCH 2"
                    },
                    {
                        role: "user", content: message
                    }
                ]
            })
        })
        const data = await response.json();
        res.json({reply: data.choices[0].message.content || "Maaf Saya Masih Bodo"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}