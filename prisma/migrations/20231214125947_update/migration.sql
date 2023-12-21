/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `company_secondary_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "company_secondary_user_user_name_key" ON "company_secondary_user"("user_name");
