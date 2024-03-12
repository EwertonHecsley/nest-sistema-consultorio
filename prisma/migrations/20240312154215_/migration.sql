/*
  Warnings:

  - You are about to drop the `Consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paciente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Consulta" DROP CONSTRAINT "Consulta_pacienteId_fkey";

-- DropTable
DROP TABLE "Consulta";

-- DropTable
DROP TABLE "Paciente";

-- CreateTable
CREATE TABLE "consultas" (
    "id" SERIAL NOT NULL,
    "tipoConsulta" TEXT NOT NULL,
    "valorConsulta" INTEGER NOT NULL,
    "finalizada" BOOLEAN NOT NULL DEFAULT false,
    "pacienteId" INTEGER NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_email_key" ON "pacientes"("email");

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
