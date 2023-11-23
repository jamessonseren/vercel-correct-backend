-- CreateTable
CREATE TABLE "app_user_data" (
    "id" TEXT NOT NULL,
    "internal_company_code" TEXT,
    "full_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "driver_license" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "function" TEXT,
    "salary" DOUBLE PRECISION,
    "company_type_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "dependents_quantity" INTEGER NOT NULL,
    "correct_admin_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "app_user_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "app_user_data" ADD CONSTRAINT "app_user_data_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_data" ADD CONSTRAINT "app_user_data_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
