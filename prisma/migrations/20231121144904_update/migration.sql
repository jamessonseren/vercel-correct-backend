/*
  Warnings:

  - You are about to drop the column `nome` on the `correct_admin` table. All the data in the column will be lost.
  - You are about to drop the column `usuario` on the `correct_admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `correct_admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `correct_admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `correct_admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "correct_admin_usuario_key";

-- AlterTable
ALTER TABLE "correct_admin" DROP COLUMN "nome",
DROP COLUMN "usuario",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "correct_admin_userName_key" ON "correct_admin"("userName");
