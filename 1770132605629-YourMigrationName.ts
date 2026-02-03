import { MigrationInterface, QueryRunner } from "typeorm";

export class YourMigrationName1770132605629 implements MigrationInterface {
    name = 'YourMigrationName1770132605629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
