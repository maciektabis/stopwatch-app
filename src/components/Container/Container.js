import Button from '../Button/Button';
const Container = (props) => {
	return (
		<div className={styles.container}>
			<Button >Start</Button>
			<Button>Stop</Button>
			<Button>Reset</Button>
		</div>
	);
};

export default Container;
