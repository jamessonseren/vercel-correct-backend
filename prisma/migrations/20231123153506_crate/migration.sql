-- CreateTable
CREATE TABLE "app_user_validation" (
    "id" TEXT NOT NULL,
    "face_picture" TEXT NOT NULL,
    "document_front_picture" TEXT NOT NULL,
    "document_back_picture" TEXT NOT NULL,
    "face_and_document_picture" TEXT NOT NULL,
    "app_user_auth_id" TEXT NOT NULL,

    CONSTRAINT "app_user_validation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "app_user_validation" ADD CONSTRAINT "app_user_validation_app_user_auth_id_fkey" FOREIGN KEY ("app_user_auth_id") REFERENCES "app_user_auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
