-- CreateEnum
CREATE TYPE "CompanyTypeOptions" AS ENUM ('empregador', 'comercio', 'autonomo_comercio', 'empregador_comercio');

-- CreateTable
CREATE TABLE "company_type" (
    "id" TEXT NOT NULL,
    "tipo" "CompanyTypeOptions" NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "company_admin_id" TEXT NOT NULL,

    CONSTRAINT "company_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_type_cnpj_key" ON "company_type"("cnpj");

-- AddForeignKey
ALTER TABLE "company_type" ADD CONSTRAINT "company_type_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
