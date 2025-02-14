import Joi from "joi";




interface EnvVars {
    DATABASE_URL: string;
}
const envsSchema = Joi
.object({
    DATABASE_URL: Joi.string().required(),
})
.unknown(true);
const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const envVars: EnvVars = value; 

export const envs ={
    databaseUrl: envVars.DATABASE_URL,
}
