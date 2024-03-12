-- DropForeignKey
ALTER TABLE "consultorios" DROP CONSTRAINT "consultorios_medicoId_fkey";

-- AlterTable
ALTER TABLE "consultorios" ALTER COLUMN "medicoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "consultorios" ADD CONSTRAINT "consultorios_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
