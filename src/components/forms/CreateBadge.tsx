import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Checkbox, Button, Box } from "@mui/material";
import { createBadge } from "../../services/badge.service";
import { useEffect, useState } from "react";
import Language from "../../models/language";
import { getLanguage, getLanguages } from "../../services/language.service";
import Autocomplete from "@mui/material/Autocomplete";

const style = {
  m: "25px",
  borderColor: "#db1144",
  color: "#db1144",
  outlineColor: "#db1144",
};

const CreateBadgeForm = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectLanguages, setSelectLanguage] = useState<Language[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchLanguage = async () => {
      const data = await getLanguages().then((result: any) => {
        return result;
      });
      setLanguages(data);
    };
    fetchLanguage().catch(console.error);
  }, []);

  const onSubmit = async (data: any) => {
    data.language = selectLanguages;
    createBadge(data);
    reset();
  };

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <fieldset style={{ borderRadius: "15px", margin: "25px", width: "40vw" }}>
        <legend style={{ marginLeft: "25px" }}>Creation de badge</legend>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center" }}>
            <TextField
              sx={style}
              {...register("name", { required: true })}
              label="Nom du badge"
              variant="outlined"
              placeholder="Nom du badge"
            />
            <TextField
              sx={style}
              {...register("image", { required: true })}
              label="url image badge"
              variant="outlined"
              placeholder="url image badge"
            />
          </Box>
          <Autocomplete
            multiple
            onChange={(e, data: Language[]) => {
              setSelectLanguage(data);
            }}
            sx={{ maxWidth: "30vw", m: "auto" }}
            id="tags-outlined"
            options={languages}
            getOptionLabel={(option: Language) => option.name}
            //filterSelectedOptions
            renderInput={(params: any) => (
              <TextField {...params} label="langages" placeholder="Language" />
            )}
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
            Enregistrer
          </Button>
        </form>
      </fieldset>
    </Box>
  );
};

export default CreateBadgeForm;
