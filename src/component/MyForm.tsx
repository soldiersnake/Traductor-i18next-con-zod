import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

// Esquema de validación usando Zod
const MyForm: React.FC = () => {
  const { t } = useTranslation();

  const schema = React.useMemo(
    () =>
      z.object({
        name: z.string().min(1, { message: "form.errors.required" }),
        description: z.string().optional(),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

//   // Esquema de validación traducido
//   const loginSchema = z.object({
//     email: z.string().email({ message: t("form.errors.emailRequired") }),
//     password: z
//       .string()
//       .min(6, { message: t("form.errors.passwordMin") })
//       .max(12, { message: t("form.errors.passwordMax") }),
//     rememberUser: z.boolean().optional(),
//   });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <div>
        <label htmlFor="name">{t("form.placeholders.name")}</label>
        <input
          id="name"
          {...register("name")}
          placeholder={t("form.placeholders.name")}
        />
        {errors.name && (
          <span style={{ color: "red" }}>
            {t(errors.name.message?.toString() || "")}
          </span>
        )}
      </div>

      <div style={{ marginTop: "16px" }}>
        <label htmlFor="description">
          {t("form.placeholders.description")}
        </label>
        <input
          id="description"
          {...register("description")}
          placeholder={t("form.placeholders.description")}
        />
      </div>

      <button type="submit" style={{ marginTop: "24px", display: "block" }}>
        {t("form.title")}
      </button>
    </form>
  );
};

export default MyForm;
