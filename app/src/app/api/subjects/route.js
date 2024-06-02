import { createSubjectDocument, getSubjects } from "../../../database/firebase"

export default async function GET(_req,res) {
    const subjects = await getSubjects();

    res.status(200).json({ subjects });
}

export default async function POST(req, res) {
    const formData = await req.formData();

    const name = formData.get("name");

    const message = await createSubjectDocument(name);

    res.status(200).json({ message })
}