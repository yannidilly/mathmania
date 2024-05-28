import { getSubjects } from "../../../database/firebase"

const subjects = getSubjects();

export default function handler(req,res) {
    res.status(200).json({ subjects })
}