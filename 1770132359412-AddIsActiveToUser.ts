import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveToUser1770132359412 implements MigrationInterface {
    name = 'AddIsActiveToUser1770132359412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
