/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `app_user_auth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "app_user_auth_email_key" ON "app_user_auth"("email");
