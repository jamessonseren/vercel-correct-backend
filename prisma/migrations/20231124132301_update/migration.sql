/*
  Warnings:

  - You are about to drop the column `cycle_duration` on the `employer_cards` table. All the data in the column will be lost.
  - You are about to drop the column `start_day_cycle` on the `employer_cards` table. All the data in the column will be lost.
  - You are about to drop the column `end_day_cycle` on the `partner_cards` table. All the data in the column will be lost.
  - You are about to drop the column `start_day_cycle` on the `partner_cards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employer_cards" DROP COLUMN "cycle_duration",
DROP COLUMN "start_day_cycle";

-- AlterTable
ALTER TABLE "partner_cards" DROP COLUMN "end_day_cycle",
DROP COLUMN "start_day_cycle";
