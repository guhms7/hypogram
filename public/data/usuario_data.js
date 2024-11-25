/* CREATE TABLE IF NOT EXISTS public.usuario
(
usuarioid smallint NOT NULL DEFAULT nextval('usuarioid'::regclass),
usuarionome character varying(40) COLLATE pg_catalog."default",
usuarioemail character varying(100) COLLATE pg_catalog."default",
usuariosenha character varying(40) COLLATE pg_catalog."default",
usuariostatus character varying(40) COLLATE pg_catalog."default",
usuarioestagio character varying(40) COLLATE pg_catalog."default",
CONSTRAINT usuario_pkey PRIMARY KEY (usuarioid)
) */

let usuario = [
    {
        usuarioid: 1,
        usuarionome: 'admin',
        usuarioemail: 'admin@admin.com',
        usuariosenha: '123',
        usuariostatus: 'Ativo',
        usuarioestagio: 'Aprovado'

    }
]