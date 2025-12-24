/*
  Warnings:

  - You are about to alter the column `type` on the `records` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `records` MODIFY `type` ENUM('expense', 'income') NOT NULL;
