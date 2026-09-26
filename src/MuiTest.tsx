import { useState, useEffect, useRef, useContext, createContext } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import type { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

/***********************************************/
/* ヘッダー */
/***********************************************/

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ToDoアプリ変更２
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

/***********************************************/
/* メイン */
/***********************************************/
const MuiTest = () => {
    const [query, setQuery] = useState<string>('');
    
//    debugger;
  const [email, setEmail] = useState<string>('');

  const isValid = email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [category, setCategory] = useState<string>('');
  const [agreed, setAgreed] = useState<boolean>(false);
  const [plan, setPlan] = useState<string>('free');

  function handleChange(event: SelectChangeEvent) {
    setCategory(event.target.value);
  }
    return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid size={6}>
            <Button variant="contained" onClick={() => {console.log("送信")}}>送信</Button>
            <Button variant="outlined">キャンセル</Button>
        </Grid>
        <Grid size={6}>
            <Button variant="text">詳細を見る</Button>
        </Grid>
      </Grid>
      <Typography variant="h1">大見出し更新</Typography>
      <Typography variant="h2">中見出し</Typography>
      <Typography variant="body1">通常の本文テキストです。</Typography>
      <Typography variant="caption">補足的な小さい文字</Typography>     
      <br />
    <FormControl fullWidth>
      <InputLabel id="category-label">カテゴリ</InputLabel>
      <Select
        labelId="category-label"
        value={category}
        label="カテゴリ"
        onChange={handleChange}
      >
        <MenuItem value="work">仕事</MenuItem>
        <MenuItem value="private">プライベート</MenuItem>
        <MenuItem value="other">その他</MenuItem>
      </Select>
    <TextField
      label="メールアドレス"
      value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      error={!isValid}
      helperText={!isValid ? '正しいメールアドレス形式で入力してください' : ' '}
    />
    </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={agreed}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgreed(e.target.checked)}
          />
        }
        label="利用規約に同意する"
      />

      <RadioGroup
        value={plan}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlan(e.target.value)}
      >
        <FormControlLabel value="free" control={<Radio />} label="無料プラン" />
        <FormControlLabel value="paid" control={<Radio />} label="有料プラン" />
      </RadioGroup>
    </>
    )

}

export default  MuiTest;