-- CreateTable
CREATE TABLE "company_secondary_user" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "company_admin_id" TEXT NOT NULL,

    CONSTRAINT "company_secondary_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company_secondary_user" ADD CONSTRAINT "company_secondary_user_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
