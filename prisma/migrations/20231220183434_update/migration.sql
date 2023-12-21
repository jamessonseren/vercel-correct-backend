/*
  Warnings:

  - You are about to drop the `company_admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "advertisements" DROP CONSTRAINT "advertisements_company_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "company_data" DROP CONSTRAINT "company_data_company_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "company_type" DROP CONSTRAINT "company_type_company_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_company_admin_id_fkey";

-- DropTable
DROP TABLE "company_admin";

-- CreateTable
CREATE TABLE "company_user" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "cnpj" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT,
    "permissions" "CompanyPermissions"[] DEFAULT ARRAY['admin']::"CompanyPermissions"[],
    "function" TEXT,
    "client_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "company_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_user_email_key" ON "company_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "company_user_cnpj_key" ON "company_user"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "company_user_user_name_key" ON "company_user"("user_name");

-- AddForeignKey
ALTER TABLE "company_data" ADD CONSTRAINT "company_data_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_type" ADD CONSTRAINT "company_type_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisements" ADD CONSTRAINT "advertisements_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
