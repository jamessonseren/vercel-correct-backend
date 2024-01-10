-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "PermissionsPartner" AS ENUM ('sales', 'finances', 'marketing', 'all');

-- CreateEnum
CREATE TYPE "PermissionEmployer" AS ENUM ('benefits', 'transports', 'all');

-- CreateEnum
CREATE TYPE "CompanyTypeOptions" AS ENUM ('empregador', 'comercio', 'autonomo_comercio', 'empregador_comercio');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('pos_pago', 'pre_pago');

-- CreateTable
CREATE TABLE "correct_admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permissions" "UserRoles"[] DEFAULT ARRAY['admin']::"UserRoles"[],

    CONSTRAINT "correct_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_users" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "cnpj" TEXT,
    "cpf" TEXT,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT,
    "roles" "UserRoles"[] DEFAULT ARRAY['admin']::"UserRoles"[],
    "permissions" "PermissionsPartner"[] DEFAULT ARRAY['all']::"PermissionsPartner"[],
    "function" TEXT,
    "client_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "company_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_datas" (
    "id" TEXT NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "total_employees" INTEGER NOT NULL,
    "phone_1" TEXT NOT NULL,
    "phone_2" TEXT,
    "company_user_id" TEXT NOT NULL,
    "correct_admin_id" TEXT NOT NULL,

    CONSTRAINT "company_datas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_types" (
    "id" TEXT NOT NULL,
    "type" "CompanyTypeOptions" NOT NULL,
    "cnpj" TEXT NOT NULL,
    "company_user_id" TEXT NOT NULL,

    CONSTRAINT "company_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_user_datas" (
    "id" TEXT NOT NULL,
    "internal_company_code" TEXT,
    "employee" BOOLEAN NOT NULL DEFAULT true,
    "company_owner" BOOLEAN NOT NULL DEFAULT false,
    "full_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "rg" TEXT,
    "cpf" TEXT NOT NULL,
    "driver_license" TEXT,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "function" TEXT,
    "salary" DOUBLE PRECISION,
    "company_type_id" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "marital_status" TEXT NOT NULL,
    "dependents_quantity" INTEGER NOT NULL DEFAULT 0,
    "correct_admin_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "app_user_datas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_user_auth" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "app_user_auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_user_validations" (
    "id" TEXT NOT NULL,
    "face_picture" TEXT NOT NULL,
    "document_front_picture" TEXT NOT NULL,
    "document_back_picture" TEXT NOT NULL,
    "face_and_document_picture" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "app_user_auth_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "app_user_validations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "card_name" TEXT NOT NULL,
    "card_type" "CardType" NOT NULL,
    "correct_admin_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partner_cards" (
    "id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "company_type_id" TEXT NOT NULL,
    "adm_correct_fee" DOUBLE PRECISION NOT NULL,
    "mkt_correct_fee" DOUBLE PRECISION NOT NULL,
    "total_installments" INTEGER NOT NULL DEFAULT 1,
    "cashback" DOUBLE PRECISION NOT NULL,
    "validate" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "partner_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employer_cards" (
    "id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "company_type_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "employer_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_user_accounts" (
    "id" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "available_amount" INTEGER NOT NULL,
    "employer_cards_id" TEXT,
    "app_user_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "app_user_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_business_cards" (
    "id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "company_type_id" TEXT NOT NULL,
    "adm_correct_fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "mkt_correct_fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_installments" INTEGER NOT NULL DEFAULT 1,
    "cashback" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "validate" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "company_business_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_addressess" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "company_addressess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "banner" TEXT NOT NULL DEFAULT '',
    "category_name" TEXT NOT NULL,
    "company_user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advertisements" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "banner" TEXT NOT NULL DEFAULT '',
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "company_user_id" TEXT NOT NULL,

    CONSTRAINT "advertisements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "correct_admin_userName_key" ON "correct_admin"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "correct_admin_email_key" ON "correct_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "company_users_email_key" ON "company_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "company_users_cnpj_key" ON "company_users"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "company_users_cpf_key" ON "company_users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "company_users_user_name_key" ON "company_users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "company_datas_cnpj_key" ON "company_datas"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "company_datas_company_user_id_key" ON "company_datas"("company_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "company_types_cnpj_key" ON "company_types"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_datas_cpf_key" ON "app_user_datas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_datas_driver_license_key" ON "app_user_datas"("driver_license");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_auth_cpf_key" ON "app_user_auth"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_auth_email_key" ON "app_user_auth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cards_card_name_key" ON "cards"("card_name");

-- CreateIndex
CREATE UNIQUE INDEX "partner_cards_contract_number_key" ON "partner_cards"("contract_number");

-- CreateIndex
CREATE UNIQUE INDEX "employer_cards_contract_number_key" ON "employer_cards"("contract_number");

-- CreateIndex
CREATE UNIQUE INDEX "employer_cards_card_id_key" ON "employer_cards"("card_id");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_accounts_account_number_key" ON "app_user_accounts"("account_number");

-- CreateIndex
CREATE UNIQUE INDEX "company_business_cards_contract_number_key" ON "company_business_cards"("contract_number");

-- CreateIndex
CREATE UNIQUE INDEX "company_addressess_cnpj_key" ON "company_addressess"("cnpj");

-- AddForeignKey
ALTER TABLE "company_datas" ADD CONSTRAINT "company_datas_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_datas" ADD CONSTRAINT "company_datas_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_types" ADD CONSTRAINT "company_types_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_datas" ADD CONSTRAINT "app_user_datas_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_datas" ADD CONSTRAINT "app_user_datas_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_validations" ADD CONSTRAINT "app_user_validations_app_user_auth_id_fkey" FOREIGN KEY ("app_user_auth_id") REFERENCES "app_user_auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partner_cards" ADD CONSTRAINT "partner_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partner_cards" ADD CONSTRAINT "partner_cards_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employer_cards" ADD CONSTRAINT "employer_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employer_cards" ADD CONSTRAINT "employer_cards_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_employer_cards_id_fkey" FOREIGN KEY ("employer_cards_id") REFERENCES "employer_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_app_user_id_fkey" FOREIGN KEY ("app_user_id") REFERENCES "app_user_auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_business_cards" ADD CONSTRAINT "company_business_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_business_cards" ADD CONSTRAINT "company_business_cards_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisements" ADD CONSTRAINT "advertisements_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisements" ADD CONSTRAINT "advertisements_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
