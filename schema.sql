DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);