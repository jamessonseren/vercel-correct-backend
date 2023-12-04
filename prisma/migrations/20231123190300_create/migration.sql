-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('pos_pago', 'pre_pago');

-- CreateTable
CREATE TABLE "Cards" (
    "id" TEXT NOT NULL,
    "card_name" TEXT NOT NULL,
    "card_type" "CardType" NOT NULL,
    "correct_admin_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
