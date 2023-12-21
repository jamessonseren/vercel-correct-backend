-- CreateTable
CREATE TABLE "app_user_auth" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "app_user_data_id" TEXT,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "app_user_auth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "app_user_auth" ADD CONSTRAINT "app_user_auth_app_user_data_id_fkey" FOREIGN KEY ("app_user_data_id") REFERENCES "app_user_data"("id") ON DELETE SET NULL ON UPDATE CASCADE;
