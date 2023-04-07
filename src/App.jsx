import "./App.css";
import { useState } from "react";

import Prikaz from "./components/Prikaz";
import Tipka from "./components/Tipka";


function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [broj, postaviBroj] = useState(0);
  const [broj2, postaviBroj2] = useState(0);
  const [brojC1, postaviBrojC1] = useState(0);
  const [brojC2, postaviBrojC2] = useState(0);
  const [brojZ1, postaviBrojZ1] = useState(0);
  const [brojZ2, postaviBrojZ2] = useState(0);

  const uvecajBroj = () => {
    postaviBroj(broj + 1);
  }
  const umanjiBroj = () => {
    postaviBroj(c => Math.max(c - 1, 0));
  }

  const uvecajBroj2 = () => {
    postaviBroj2(broj2 + 1);
  }
  const umanjiBroj2 = () => {
    postaviBroj2(c => Math.max(c - 1, 0));
  }
  /* Zuti kartoni*/
  const uvecajBrojZ1 = () => {
    postaviBrojZ1(brojZ1 + 1);
  }
  const umanjiBrojZ1 = () => {
    postaviBrojZ1(c => Math.max(c - 1, 0));
  }

  const uvecajBrojZ2 = () => {
    postaviBrojZ2(brojZ2 + 1);
  }
  const umanjiBrojZ2 = () => {
    postaviBrojZ2(c => Math.max(c - 1, 0));
  }
  /* Crveni kartoni*/
  const uvecajBrojC1 = () => {
    postaviBrojC1(brojC1 + 1);
  }
  const umanjiBrojC1 = () => {
    postaviBrojC1(c => Math.max(c - 1, 0));
  }

  const uvecajBrojC2 = () => {
    postaviBrojC2(brojC2 + 1);
  }
  const umanjiBrojC2 = () => {
    postaviBrojC2(c => Math.max(c - 1, 0));
  }


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>{date}</td>
          </tr>
          <tr>
            <td> <img src="../chalsea.jpg" alt="MAN" width={200} />CHALSEA</td>
            <td><div className="score"><Prikaz broj={broj} /><h1>:</h1> <Prikaz broj={broj2} /></div></td>
            <td><img src="../image3.jpg" alt="LEI" width={200} />HAJDUK</td>
          </tr>


          <tr>
            <td colSpan={3}>
              <Tipka natpis='+' akcija={uvecajBroj} />
              <Tipka natpis="-" akcija={umanjiBroj} />
              <Tipka natpis='+' akcija={uvecajBroj2} />
              <Tipka natpis="-" akcija={umanjiBroj2} />


            </td>
          </tr>
          <tr>
            <td colSpan={3}> <Tipka natpis="RESET" akcija={() => postaviBroj(0) & postaviBroj2(0) & postaviBrojZ1(0) & postaviBrojZ2(0) & postaviBrojC1(0) & postaviBrojC2(0)} /></td>
          </tr>


        </tbody>
      </table>
      <div className="prekrsaji">
        <table >
          <tbody>
            <tr>
              <td colSpan={8}>BROJ PODJELJENIH KARTONA</td>
            </tr>
            <tr>
              <td> <Tipka natpis='+' akcija={uvecajBrojZ1} /></td>
              <td><Tipka natpis="-" akcija={umanjiBrojZ1} /></td>
              <td>🟨 </td>
              <td><Prikaz broj={brojZ1} /></td>
              <td><Prikaz broj={brojZ2} /></td>
              <td>🟨</td>
              <td> <Tipka natpis='+' akcija={uvecajBrojZ2} /></td>
              <td><Tipka natpis="-" akcija={umanjiBrojZ2} /></td>


            </tr>
            <tr>

              <td> <Tipka natpis='+' akcija={uvecajBrojC1} /></td>
              <td><Tipka natpis="-" akcija={umanjiBrojC1} /></td>
              <td>🟥</td>
              <td><Prikaz broj={brojC1} /></td>
              <td><Prikaz broj={brojC2} /></td>
              <td>🟥</td>
              <td> <Tipka natpis='+' akcija={uvecajBrojC2} /></td>
              <td><Tipka natpis="-" akcija={umanjiBrojC2} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
