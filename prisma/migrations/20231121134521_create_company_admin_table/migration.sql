-- CreateTable
CREATE TABLE "company_admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "company_admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_admin_email_key" ON "company_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "company_admin_cnpj_key" ON "company_admin"("cnpj");
