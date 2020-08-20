import knex from "knex";
import Knex from "knex";

export async function up(knex: knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

// Caso ocorra algum erro
export async function down(knex: knex) {
  return knex.schema.dropTable("connections");
}
