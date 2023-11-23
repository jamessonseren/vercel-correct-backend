/*
  Warnings:

  - A unique constraint covering the columns `[rg]` on the table `app_user_data` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `app_user_data` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[driver_license]` on the table `app_user_data` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "app_user_data" ALTER COLUMN "rg" DROP NOT NULL,
ALTER COLUMN "driver_license" DROP NOT NULL,
ALTER COLUMN "dependents_quantity" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "app_user_data_rg_key" ON "app_user_data"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_data_cpf_key" ON "app_user_data"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_data_driver_license_key" ON "app_user_data"("driver_license");
