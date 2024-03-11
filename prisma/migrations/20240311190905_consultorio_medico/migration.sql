-- CreateTable
CREATE TABLE "consultorios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnes" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "medicoId" INTEGER NOT NULL,

    CONSTRAINT "consultorios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "consultorios_cnes_key" ON "consultorios"("cnes");

-- AddForeignKey
ALTER TABLE "consultorios" ADD CONSTRAINT "consultorios_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
