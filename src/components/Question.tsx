import React, { useState } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  List,
  ListItem,
  Typography,
} from "@mui/material";

interface QuestionProps {
  question: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onSelectOption,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div>
      <Typography variant="h5">{question}</Typography>
      <List>
        <RadioGroup>
          {options.map((option, index) => (
            <ListItem key={index}>
              <FormControlLabel
                control={<Radio />}
                label={option}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleSelectOption(option)}
              />
            </ListItem>
          ))}
        </RadioGroup>
      </List>
    </div>
  );
};

export default Question;
