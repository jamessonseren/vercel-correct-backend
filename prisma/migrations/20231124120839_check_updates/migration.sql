/*
  Warnings:

  - You are about to drop the column `end_date_cycle` on the `partner_cards` table. All the data in the column will be lost.
  - You are about to drop the column `start_date_cycle` on the `partner_cards` table. All the data in the column will be lost.
  - Added the required column `start_day_cycle` to the `partner_cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "partner_cards" DROP COLUMN "end_date_cycle",
DROP COLUMN "start_date_cycle",
ADD COLUMN     "end_day_cycle" INTEGER DEFAULT 30,
ADD COLUMN     "start_day_cycle" INTEGER NOT NULL;
