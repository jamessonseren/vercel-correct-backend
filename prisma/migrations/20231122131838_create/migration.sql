-- CreateTable
CREATE TABLE "company_data" (
    "id" TEXT NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cnae_id" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "total_employees" INTEGER NOT NULL,
    "phone_1" TEXT NOT NULL,
    "phone_2" TEXT,
    "company_admin_id" TEXT NOT NULL,
    "correct_admin_id" TEXT NOT NULL,

    CONSTRAINT "company_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company_data" ADD CONSTRAINT "company_data_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_data" ADD CONSTRAINT "company_data_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
