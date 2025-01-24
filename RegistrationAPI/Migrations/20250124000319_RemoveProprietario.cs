using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RegistrationAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemoveProprietario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Lojas",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Lojas");
        }
    }
}
