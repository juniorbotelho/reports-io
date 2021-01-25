import { MigrationInterface, QueryRunner } from "typeorm"

export class User1611605301772 implements MigrationInterface {
  name = "User1611605301772"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `user` CHANGE `firstname` `firstname` varchar(255) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE `user` CHANGE `lastname` `lastname` varchar(255) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE `user` CHANGE `validated` `validated` tinyint NOT NULL DEFAULT 0")
    await queryRunner.query("ALTER TABLE `user` CHANGE `updatedAt` `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)")
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `user` CHANGE `updatedAt` `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)")
    await queryRunner.query("ALTER TABLE `user` CHANGE `validated` `validated` tinyint NOT NULL")
    await queryRunner.query("ALTER TABLE `user` CHANGE `lastname` `lastname` varchar(255) NOT NULL")
    await queryRunner.query("ALTER TABLE `user` CHANGE `firstname` `firstname` varchar(255) NOT NULL")
  }
}
