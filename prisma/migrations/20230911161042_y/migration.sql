-- DropForeignKey
ALTER TABLE "ReviewAndRating" DROP CONSTRAINT "ReviewAndRating_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "publicationDate" SET DATA TYPE TEXT;
