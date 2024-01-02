import * as S from './styles';

type ProgressBarProps = {
  temp: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ temp }) => {
  return (
    <S.TemperatureWrap>
      <S.Temperature>
        <S.TemperatureStatus>
          <S.TemperatureText>밥 온도</S.TemperatureText>
          <S.TemperatureNum>{temp}°C</S.TemperatureNum>
        </S.TemperatureStatus>
        <S.ProgressBar>
          <S.Progress $temp={temp} />
        </S.ProgressBar>
      </S.Temperature>
    </S.TemperatureWrap>
  );
};

export default ProgressBar;
