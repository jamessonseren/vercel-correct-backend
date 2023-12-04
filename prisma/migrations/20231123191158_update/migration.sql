/*
  Warnings:

  - You are about to drop the `Cards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_correct_admin_id_fkey";

-- DropTable
DROP TABLE "Cards";

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

-- CreateIndex
CREATE UNIQUE INDEX "cards_card_name_key" ON "cards"("card_name");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
