-- DropForeignKey
ALTER TABLE "app_user_data" DROP CONSTRAINT "app_user_data_company_type_id_fkey";

-- AlterTable
ALTER TABLE "app_user_data" ALTER COLUMN "company_type_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "app_user_data" ADD CONSTRAINT "app_user_data_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
