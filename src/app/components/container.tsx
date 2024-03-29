import { Image, StyleSheet, View } from "react-native";
import ButtonComponent from "./button";

type IContainerProps = {
	children: React.ReactNode;
	actionFooterButton: () => void;
	textFooterButton: string;
	showFooterButton?: boolean;
};

export default function ContainerComponent({
	children,
	actionFooterButton,
	textFooterButton,
	showFooterButton = true,
}: IContainerProps) {
	return (
		<View style={styles.container}>
			<View style={styles.containerImage}>
				<Image
					style={styles.image}
					source={require("../../../assets/images/logo.webp")}
				/>
			</View>
			<View style={styles.body}>
				{children}
				{showFooterButton && (
					<View>
						<ButtonComponent
							action={actionFooterButton}
							text={textFooterButton}
						/>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#01386B",
	},
	containerImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		height: "80%",
		width: "90%",
		justifyContent: "space-between",
		margin: "auto",
	},
	image: {
		opacity: 0.1,
		transform: [{ rotate: "-15deg" }],
		zIndex: -1,
	},
});
