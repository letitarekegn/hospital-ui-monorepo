"use client"
import { Card } from "../../ui/card"

export function MedicineCard({ medicine }: { medicine: { name: string; type: string; dosage: string } }) {
  return (
    <Card className="p-4 shadow-md">
      <h3 className="text-lg font-bold">{medicine.name}</h3>
      <p>Type: {medicine.type}</p>
      <p>Dosage: {medicine.dosage}</p>
    </Card>
  )
}