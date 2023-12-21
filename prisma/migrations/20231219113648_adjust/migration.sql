/*
  Warnings:

  - Made the column `banner` on table `advertisements` required. This step will fail if there are existing NULL values in that column.
  - Made the column `banner` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "advertisements" ALTER COLUMN "banner" SET NOT NULL,
ALTER COLUMN "banner" SET DEFAULT '';

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "banner" SET NOT NULL,
ALTER COLUMN "banner" SET DEFAULT '';
