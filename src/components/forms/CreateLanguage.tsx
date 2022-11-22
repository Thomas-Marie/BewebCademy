import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import { createLanguage } from "../../services/language.service";

const style = {
  m: "25px",
  borderColor: "#db1144",
  color: "#db1144",
  outlineColor: "#db1144",
};
const CreateLanguageForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    await createLanguage(data)
    reset()
  };

  return (
    <Box display='flex' flexDirection="row" alignItems="center" margin='auto'>
      <fieldset style={{ borderRadius: "15px", margin: "25px" }}><legend style={{ marginLeft: "25px" }}>Creation de langage</legend>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            color="secondary"
            sx={style}
            {...register("name", { required: true })}
            label="langage"
            variant="outlined"
            placeholder="langage"
          />
          <TextField
            color="secondary"
            sx={style}
            {...register("monaco", { required: true })}
            label="monaco"
            variant="outlined"
            placeholder="monaco name"
          />
          <Button
            sx={{
              m: "25px",
              borderColor: "#db1144",
              color: "#db1144",
              outlineColor: "#db1144",
              "&:hover": {
                bgcolor: "#db114440",
                borderColor: "#db1144",
              },
            }}
            type="submit"
            variant="outlined"
          >
            {" "}
            Enregistrer{" "}
          </Button>
        </form>
      </fieldset>
    </Box>
  );
};

export default CreateLanguageForm;
