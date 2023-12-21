-- CreateTable
CREATE TABLE "app_user_accounts" (
    "id" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "available_amount" DOUBLE PRECISION NOT NULL,
    "employer_cards_id" TEXT NOT NULL,
    "app_user_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "app_user_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "app_user_accounts_account_number_key" ON "app_user_accounts"("account_number");

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_employer_cards_id_fkey" FOREIGN KEY ("employer_cards_id") REFERENCES "employer_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_app_user_id_fkey" FOREIGN KEY ("app_user_id") REFERENCES "app_user_auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
