using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RegistrationAPI.Migrations
{
    /// <inheritdoc />
    public partial class EditModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProprietarioId",
                table: "Lojas");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProprietarioId",
                table: "Lojas",
                type: "integer",
                nullable: true);
        }
    }
}
